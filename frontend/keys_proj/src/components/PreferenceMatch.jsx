import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import DetailButtons from './DetailButtons';

function PreferenceMatch({cardData, preferences, setPreferences, house}) {
    
    const [bedroomsColor, setBedroomsColor] = useState("")
    const [bathroomsColor, setBathroomsColor] = useState("")
    const [neighborhoodColor, setNeighborhoodColor] = useState("")
    const [laundryColor, setLaundryColor] = useState("")
    const [coolingColor, setCoolingColor] = useState("")
    const [heatingColor, setHeatingColor] = useState("")
    const [dishwasherColor, setDishwasherColor] = useState("")
    const [parkingColor, setParkingColor] = useState("")
    
 
    const getPreferences = async() => {
        try {
            let preferenceResponse = await api.get(`user_preferences/`)
            setPreferences(preferenceResponse.data)
            console.log("Preferences gathered")
            bedroomsMatch()
            bathroomsMatch()
            neighborhoodMatch()
            laundryMatch()
            coolingMatch()
            heatingMatch()
            dishwasherMatch()
            parkingMatch()
        } catch (error) {
            console.log("Error gathering preferences: ", error)
        }
    }

    const bedroomsMatch = () => {
        if (preferences.bedrooms === house.bedrooms){
            setBedroomsColor("green")
        }
        else {
            setBedroomsColor("salmon")
        }
    }

    const bathroomsMatch = () => {
        if (preferences.bedrooms === house.bedrooms){
            setBathroomsColor("lightgreen")
        }
        else {
            setBathroomsColor("salmon")
        }
    }

    const neighborhoodMatch = () => {
        if (preferences.neighborhood === house.neighborhood){
            setNeighborhoodColor("mint")
        }
    }

    const laundryMatch = () => {
        if (preferences.laundry === house.property.laundry){
            setLaundryColor("palegreen")
        }
        else if (house.property.laundry === 'None' || house.property.laundry === null || house.property.laundry === 'none') {
            setLaundryColor("salmon")
        }
        else {
            setLaundryColor("yellow")
        }
    }

    const coolingMatch = () => {
        if (preferences.cooling === house.property.cooling){
            setCoolingColor("palegreen")
        }
        else if (house.property.cooling === 'No_cooling' || house.property.cooling === null || house.property.cooling === 'No cooling') {
            setCoolingColor("salmon")
        }
        else {
            setCoolingColor("yellow")
        }
    }

    const heatingMatch = () => {
        if (preferences.heating === house.property.heating){
            setHeatingColor("palegreen")
        }
        else if (house.property.heating === 'None' || house.property.heating === null || house.property.heating === 'none') {
            setHeatingColor("salmon")
        }
        else {
            setHeatingColor("yellow")
        }
    }

    const parkingMatch = () => {
        if (preferences.heating === house.property.parking){
            setParkingColor("palegreen")
        }
        else if (house.property.parking === 'None' || house.property.parking === null || house.property.parking === 'none') {
            setParkingColor("salmon")
        }
        else {
            setParkingColor("yellow")
        }
    }

    const dishwasherMatch = () => {
        if (preferences.dishwasher === house.property.dishwasher){
            setDishwasherColor("palegreen")
        }
        else if (house.property.dishwasher === 'None' || house.property.dishwasher === null || house.property.dishwasher === 'none') {
            setDishwasherColor("salmon")
        }
        else {
            setDishwasherColor("yellow")
        }
    }

      

  return (
   <>
   <DetailButtons
   house={house}
   bedroomsColor={bedroomsColor}
   bathroomsColor={bathroomsColor}
   laundryColor={laundryColor}
   coolingColor={coolingColor}
   heatingColor={heatingColor}
   dishwasherColor={dishwasherColor}
   parkingColor={parkingColor}/>
   </>
  );
}

export default PreferenceMatch;