export default function (size,unit = "px", width = 1360) {
    switch (unit){
        case "px" : return `${Math.max(size) / width * 100}vw`;
        case "vh" : return `${Math.max(size * 6.56) / width * 100}vw`;
        case "em" : return `${Math.max(size * 16) / width * 100}vw`;
        default : return "0" 
    }
    
}