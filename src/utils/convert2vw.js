export default function (size,unit = "px",rate = 0,width = 1365) {
    switch (unit){
        case "px" : return `calc(${Math.max(size) / width * 100}vw + (13.65px - 1vw)*${rate})`;
        case "vh" : return `calc(${Math.max(size * 6.56) / width * 100}vw + (13.65px - 1vw)*${rate})`;
        case "em" : return `calc(${Math.max(size * 16) / width * 100}vw + (13.65px - 1vw)*${rate})`;
        default : return "0" 
    }
    
}