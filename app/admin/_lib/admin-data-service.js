import { supabase } from "@/app/_lib/supabase";

export async function updateSetting(newSetting) {
    const { data, error } = await supabase
      .from("settings")
      .update(newSetting)
      // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
      .eq("id", 1)
      .single();
  
    if (error) {
      console.error(error);
      throw new Error("Settings could not be updated");
    }
    return data;
  }