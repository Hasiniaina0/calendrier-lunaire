import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import styles from '../styles/HomePage.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import phasesImages from "../data/phasesImages"; 
import homePageData from "../data/homePageData"; 

const HomePage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [phaseImage, setPhaseImage] = useState(phasesImages.firstQuarter); // Image par défaut
    const [phaseDetails, setPhaseDetails] = useState(homePageData.firstQuarter); // Détails de la phase

    useEffect(() => {
        // Mettre à jour la date actuelle lors du premier rendu
        setCurrentDate(new Date());
        updatePhase(selectedDate);
    }, []);

    useEffect(() => {
        // Mettre à jour la phase de la lune lorsque la date sélectionnée change
        updatePhase(selectedDate);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const updatePhase = (phaseKey) => {
        // Conditions if pour définir la phase
        if (phaseKey === "newMoon") {
            setPhaseImage(phasesImages.newMoon);
            setPhaseDetails(homePageData.newMoon); 
        } else if (phaseKey === "waxingCrescent") {
            setPhaseImage(phasesImages.waxingCrescent);
            setPhaseDetails(homePageData.waxingCrescent); 
        } else if (phaseKey === "firstQuarter") {
            setPhaseImage(phasesImages.firstQuarter);
            setPhaseDetails(homePageData.firstQuarter); 
        } else if (phaseKey === "waxingGibbous") {
            setPhaseImage(phasesImages.waxingGibbous);
            setPhaseDetails(homePageData.waxingGibbous);
        } else if (phaseKey === "fullMoon") {
            setPhaseImage(phasesImages.fullMoon);
            setPhaseDetails(homePageData.fullMoon); 
        } else if (phaseKey === "waningGibbous") {
            setPhaseImage(phasesImages.waningGibbous);
            setPhaseDetails(homePageData.waningCrescent); 
        } else if (phaseKey === "lastQuarter") {
            setPhaseImage(phasesImages.thirdQuarter);
            setPhaseDetails(homePageData.thirdQuarter);
        } else if (phaseKey === "waningCrescent") {
            setPhaseImage(phasesImages.waningCrescent);
            setPhaseDetails(homePageData.waningCrescent); 
        }
    };

    return (
        <div className={styles.container}>
            <p className="day">
                Phase de la lune d'aujourd'hui : {currentDate.toLocaleDateString()} <br />
                Date sélectionnée : {selectedDate.toLocaleDateString()}
            </p>

            <div className="calendar">
                <label>Sélectionner une date :</label>
                <DatePicker
                    showIcon
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy" 
                />
            </div>

            {/* Affichage de l'image de la phase sélectionnée */}
            <div className={styles.phaseContainer}>
                <img className={styles.phaseOfMoonImage} src={phaseImage} alt="Phase de la lune" />

                <div className={styles.phaseContent}>
                    <h2 className="h2">PHASE DE LA LUNE</h2>
                    <p> Nom de la phase : {phaseDetails.title}</p>
                    <p>Eclairage : {phaseDetails.eclairage}</p>
                    <p>Age : {phaseDetails.age}</p>
                    <p>Distance avec le soleil : {phaseDetails.distance}</p>
                    <p>Sun distance : {phaseDetails.sun}</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;