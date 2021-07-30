function submit()
{
    //variables
    // document.getElementById('land').defaultValue = "-1";
    // document.getElementById('ph').defaultValue = "-1";
    // document.getElementById('sar').defaultValue = "-1";
    // document.getElementById('ec').defaultValue = "-1";
    // document.getElementById('cec').defaultValue = "-1";

    var crop = document.getElementById('crop').value;
    var land = document.getElementById('land').value;
    var ph = document.getElementById('ph').value;
    var sar = document.getElementById('sar').value;
    var ec = document.getElementById('ec').value;
    var cec = document.getElementById('cec').value;

    var output = document.getElementById('output');
    var ph_output = document.getElementById('ph_output');
    var sar_output = document.getElementById('sar_output');
    var ec_output = document.getElementById('ec_output');
    var cec_output = document.getElementById('cec_output');
    var f_output = document.getElementById('f_output');

    var ph_value, sar_value, ec_value, cec_value, f_value;
    output.style.display="flex";
    var sulphur, lime;

    if(sar == ''){sar = -1;}if(ph == ''){ph = -1;}if(cec == ''){cec = -1;}if(ec == ''){ec = -1;}if(land == ''){land = 0;}

    switch(crop)
    {
        case 'wheat':
            if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
            else if(ph>7 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
            else if(ph<=7 && ph>=6){ph_output.innerHTML = "Ideal pH";}
            else{ph_output.innerHTML = "";}
            if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
            else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
            else{sar_output.innerHTML = "";}
            if(ec<6 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
            else if(ec>6){ec_output.innerHTML = `Use fresh water for irrigation`;}
            else if(ec==6){ec_output.innerHTML = "Ideal Electrical Conductivity";}
            else{ec_output.innerHTML = "";}
            if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
            if(land > 0){f_output.innerHTML = `Use ${110*land} kg of urea and ${155*land} kg of super phosphate`;}
            else{f_output.innerHTML = "";}
            break;
            case 'rice':
                if(ph<5.5 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(5.5-ph)} kg of lime`;}
                else if(ph>7 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=7 && ph>=5.5){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<3 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>3){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==3){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land > 0){f_output.innerHTML = `Use ${110*land} kg of urea and ${75*land} kg of super phosphate`;}
                else{f_output.innerHTML = "";}
                break;
            case 'potato':
                if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>6.5 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-6.5)} kg of sulphur`;}
                else if(ph<=6.5 && ph>=6){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.5 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>2){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec<=2 && ec>=1.5){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land > 0){f_output.innerHTML = `For rainfed potato, use NPK fertilizer of ${land*75/2.5} kg N(Nitrogen), ${land*75/2.5} kg P(Phosphorus), ${land*100/2.5} kg K(Potassium)\nFor irrigated potato, use NPK fertilizer of ${land*125/2.5} kg N(Nitrogen), ${land*100/2.5} kg P(Phosphorus), ${land*125/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = ""};
                break;
                case 'cotton':
                if(ph<5.8 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(5.8-ph)} kg of lime`;}
                else if(ph>8 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-8)} kg of sulphur`;}
                else if(ph<=8 && ph>=5.8){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<7.5 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>8){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec<=8 && ec>=7.5){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land > 0){f_output.innerHTML = `Use NPK fertilizer of ${land*40} kg N(Nitrogen), ${land*20} kg P(Phosphorus), ${land*20} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'sugarcane':
                if(ph<6.5 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6.5-ph)} kg of lime`;}
                else if(ph>7.5 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7.5)} kg of sulphur`;}
                else if(ph<=7.5 && ph>=6.5){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<4 && ec>=0){ec_output.innerHTML = ``;}
                else if(ec>4){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==4){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if( land > 0){f_output.innerHTML = `Use NPK fertilizer of ${land*250/2.5} kg N(Nitrogen), ${land*75/2.5} kg P(Phosphorus), ${land*150/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'jute':
                if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>7.5 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-8)} kg of sulphur`;}
                else if(ph<=7.5 && ph>=6){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<2.5 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>2.5){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==2.5){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land > 0){f_output.innerHTML = `Use NPK fertilizer of ${land*40/2.5} kg N(Nitrogen), ${land*20/2.5} kg P(Phosphorus), ${land*20/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'tea_black':
                if(ph<4.9 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(4.9-ph)} kg of lime`;}
                else if(ph>5.5 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-5.5)} kg of sulphur`;}
                else if(ph<=5.5 && ph>=4.9){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.8 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>1.8){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==1.8){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPK fertilizer of ${land*90/2.5} kg N(Nitrogen), ${land*90/2.5} kg P(Phosphorus), ${land*90/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'tea_green':
                if(ph<7 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(7-ph)} kg of lime`;}
                else if(ph>10 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-10)} kg of sulphur`;}
                else if(ph<=10 && ph>=7){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6 && land>0){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.8 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>1.8){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==1.8){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPK fertilizer of ${land*90/2.5} kg N(Nitrogen), ${land*90/2.5} kg P(Phosphorus), ${land*90/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = ""}
                break;
                case 'tomato':
                if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>7 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=7 && ph>=6){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<2.5 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>2.5){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==2.5){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land > 0){f_output.innerHTML = `Use ${374/2.5*land} kg of Ammonium Nitrate(34-0-0), ${119/2.5*land} of Calcium Nitrate(26% CaO), ${112.5/2.5*land} kg of Magnesium Sulphate(16% MgO), ${1080.4/2.5*land} kg of Multi-K(13-0-46), ${139/2.5*land} kg of Haifa-MAP(12-61-0)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'onion':
                if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>7 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=7 && ph>=6){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.4 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>1.4){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==1.4){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPK fertilizer of ${land*40/2.5} kg N(Nitrogen), ${land*40/2.5} kg P(Phosphorus), ${land*60/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'corn':
                if(ph<5.8 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>7 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=7 && ph>=5.8){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.7 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>1.7){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==1.7){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPK fertilizer of ${land*135/2.5} kg N(Nitrogen), ${land*62/2.5} kg P(Phosphorus), ${land*50/2.5} kg K(Potassium) , ${land*37.5/2.5} kh of ZnSO4`;}
                else{f_output.innerHTML = "";}
                break;
                case 'soybean':
                if(ph<5.2 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>6.5 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=6.5 && ph>=5.2){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<5 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>5){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==5){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPKS fertilizer of ${land*20/2.5} kg N(Nitrogen), ${land*40/2.5} kg P(Phosphorus), ${land*20/2.5} kg K(Potassium), ${land*20/2.5} kh of S(Sulphur)`;}
                else{f_output.innerHTML = "";}
                break;
                case 'orange':
                if(ph<6 && ph>=0 && land>0){ph_output.innerHTML = `Apply ${land*1200*(6-ph)} kg of lime`;}
                else if(ph>7.6 && land>0){ph_output.innerHTML = `Apply ${land*1200*(ph-7)} kg of sulphur`;}
                else if(ph<=7.5 && ph>=6){ph_output.innerHTML = "Ideal pH";}
                else{ph_output.innerHTML = "";}
                if(sar>6){sar_output.innerHTML = `Apply ${land*1700*(sar-6)} kg of gypsum`;}
                else if(sar<=6 && sar>=0 && land>0){sar_output.innerHTML = "Ideal Sodium Adsorption Ratio";}
                else{sar_output.innerHTML = "";}
                if(ec<1.7 && ec>=0){ec_output.innerHTML = `Use saline water for irrigation`;}
                else if(ec>1.7){ec_output.innerHTML = `Use fresh water for irrigation`;}
                else if(ec==1.7){ec_output.innerHTML = "Ideal Electrical Conductivity";}
                else{ec_output.innerHTML = "";}
                if(cec<10 && cec>=0){cec_output.innerHTML = `Use organic matter`;}
                else if(cec>10){cec_output.innerHTML = "Ideal Cation Exchange Capacity";}
                else{cec_output.innerHTML = "";}
                if(land >0){f_output.innerHTML = `Use NPK fertilizer of ${land*140/2.5} kg N(Nitrogen), ${land*40/2.5} kg P(Phosphorus), ${land*100/2.5} kg K(Potassium)`;}
                else{f_output.innerHTML = "";}
                break;
        default:
            break;
    }
    
}