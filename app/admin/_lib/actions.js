"use server";

import { updateSetting } from "./admin-data-service";

export async function updateSettingsAction(obj) {
    if(!obj)    return;
    console.log("From update settings action====",obj);
    console.log("================================ Updating settings================================")
    await updateSetting(obj);
    console.log("================================ Settings updated================================")
}