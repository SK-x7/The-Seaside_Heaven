"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";

export async function signInAction(params) {
    await signIn("google",{
        redirectTo:"/account"
    })
}
export async function signOutAction(params) {
    await signOut({
        redirectTo:"/"
    })
}


export async function updateGuestAction(formData) {
    console.log(formData);
    const session = await auth();
    if(!session) throw new Error("You must be logged in");
    
    const nationalID=formData.get('nationalID');
    const [nationality,countryFlag]=formData.get('nationality').split("%");
    
    const regex = /^[a-zA-Z0-9]{6,12}$/;
    if(!regex.test(nationalID)){
        throw new Error("please provide a valid national ID");
    }
    
    const updateData = {nationality,countryFlag,nationalID}
    const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session?.user?.guestId)

  if (error) {
    // console.error(error);
    throw new Error('Guest could not be updated');
  }
  
  revalidatePath('/account/profile');
}


export async function createReservationAction(bookingData,formData){
    
    const session= await auth();
    if(!session){
        throw new Error("You must be logged in");
    }
    
    const newBookingData ={
        ...bookingData,
        guestId:session.user.guestId,
        numGuests:Number(formData.get("numGuests")),
        observations:formData.get("observations").slice(0,1000),
        extraPrice:0,
        totalPrice:bookingData.cabinPrice,
        isPaid:false,
        hasBreakfast:false,
        status:"unconfirmed"        
    }
    
    console.log(newBookingData);
    
    const { error } = await supabase
    .from('bookings')
    .insert([newBookingData])

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }
  
  revalidatePath(`/cabins/${bookingData.cabinId}`)
  
}


export async function deleteReservationAction(bookingId){
    const session= await auth();
    if(!session){
        throw new Error("You must be logged in");
    }
    
    const guestBookings = await getBookings(session?.user?.guestId);
    
    const guestBookingIds = guestBookings.map((booking)=>booking.id);
    
    if(!guestBookingIds.includes(bookingId)){
        throw new Error("You are not allowed to delete this booking");
    }
    
    const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  
  revalidatePath('/account/reservations');
}

export async function updateReservationAction(formData){
    
    const numGuests=await formData.get("numGuests");
    const observations=await formData.get("observations").slice(0,1000);
    const bookingId=Number(await formData.get("id"));
    const updatedFields={numGuests,observations};
    console.log(updatedFields);
    
    const session= await auth();
    
    if(!session){
        throw new Error("You must be logged in");
    }
    
    const guestBookings = await getBookings(session?.user?.guestId);
    
    const guestBookingIds = guestBookings.map((booking)=>booking.id);
    console.log(typeof bookingId);
    
    if(!guestBookingIds.includes(Number(bookingId))){
        throw new Error("You are not allowed to update this booking");
    }
    
    const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', bookingId)
    
    if (error) {
        console.error(error);
        throw new Error('Booking could not be updated');
    }
    
    revalidatePath(`/account/reservations/edit/${bookingId}`);
    revalidatePath('/account/reservations');
    return redirect("/account/reservations");
}