import { getSettings } from '@/app/_lib/data-service'
import React from 'react'
import SettingsForm from '../_components/SettingsForm';

async function page() {
    const settings=await getSettings();
    // console.log(settings)
    
  return (
    <SettingsForm settings={settings}></SettingsForm>
    
  )
}

export default page