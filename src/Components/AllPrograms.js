import React from 'react';

//All programas here
class P1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            month: "",
            day:"",
            date: false
        };

        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }

    handleChangeYear(event) {
        if(!isNaN(event.target.value)){
            this.setState({year: event.target.value});
        }
    }
    handleChangeMonth(event) {
        if(!isNaN(event.target.value) && event.target.value >=0 && event.target.value <=12){
            this.setState({month: event.target.value});
        }
    }
    handleChangeDay(event) {
        if(!isNaN(event.target.value) && event.target.value >=0 && event.target.value <= 31){
            this.setState({day: event.target.value});
        }
    }

    ExactlyDate = (year, month, day) =>{
        year = Number(year); month = Number(month); day =Number(day);
        var Bisiesto = (year)=>{
            if(year%400 === 0 || (year%4 === 0 && year%100 !==0)){
                return true;
            }else{
                return false;
            }
        };
    
        if(year === 0){ return "*El numero del año es invalido.";}
        if(month === 0){ return "*El numero del mes es invalido.";}
        if(day === 0){ 
            return "*El numero del dia es invalido.";
        }else{
            switch (month) {
                case 4: case 6: case 9: case 11:
                    if(day>30){ return `*El dia no es valdio acorde al mes.`} break;
                case 2:
                    if(Bisiesto(year)){
                        if(day>29){ return `*El dia no es valdio acorde al mes.`}
                    }else{
                        if(day>28){ return `*El dia no es valdio acorde al mes.`}
                    }
                    break;
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    if(false){return null;} break;
                default: return null;
            }
        }
        var NameOfMonth = (m)=>{
            switch(m){
                case 1: m = "Enero"; break; case 2: m = "Febrero"; break; case 3: m = "Marzo"; break;
                case 4: m = "Abril"; break; case 5: m = "Mayo"; break; case 6: m = "Junio"; break;
                case 7: m = "Julio"; break; case 8: m = "Agosto"; break; case 9: m = "Septiembre"; break;
                case 10: m = "Octubre"; break; case 11: m = "Noviembre"; break; case 12: m = "Diciembre"; break;
                default: return `*El valor de mes es invalido.`;
            }
            return m;
        };
    
        var yearsB = 0;
        for(let i = 1; (year-1)>=i; i++){
            if(Bisiesto(i)){ yearsB++; }
        }
        var daysMonth = 0;
        for(let i = 0; (month-1)>=i; i++){
            switch (i) {
                case 1: daysMonth = 31; break;
                case 2:
                    if(Bisiesto(year)){daysMonth = daysMonth + 29;}
                    else{daysMonth = daysMonth + 28;} break;
                case 3: daysMonth = daysMonth + 31; break;
                case 4: daysMonth = daysMonth + 30; break;
                case 5: daysMonth = daysMonth + 31; break;
                case 6: daysMonth = daysMonth + 30; break;
                case 7: daysMonth = daysMonth + 31; break;
                case 8: daysMonth = daysMonth + 31; break;
                case 9: daysMonth = daysMonth + 30; break;
                case 10: daysMonth = daysMonth + 31; break;
                case 11: daysMonth = daysMonth + 30; break;
                case 12: daysMonth = daysMonth + 31; break;
                case 0: daysMonth = 0; break;  
                default: return `*El valor de mes es invalido.`;
            }
        }
        var daysT = (((year-1)-yearsB)*365 + yearsB*366 + daysMonth + day)%7;
        switch(daysT){
            case 1: daysT = "Lunes"; break; case 2: daysT = "Martes"; break;
            case 3: daysT = "Miercoles"; break; case 4: daysT = "Jueves"; break;
            case 5: daysT = "Viernes"; break; case 6: daysT = "Sabado"; break;
            case 0: daysT = "Domingo"; break; default: return null;
        }

        return `${daysT} ${day} de ${NameOfMonth(month)} del año ${year}.`;
    }

    render(){
        var dateV = null
        if(this.state.date){
            dateV = <p style={{paddingTop:"1%",}}> {this.ExactlyDate(this.state.year, this.state.month, this.state.day)}</p>
        }else{
            dateV = null
        }
        return (
            <div style={{padding:0, paddingLeft:"1%", }}>
                <p style={{margin: 0,padding:0, paddingTop:"1%",}}>Ingresa una fecha cualquiera.</p>
                <p style={{margin:0, marginBottom:"1%", fontSize:"82%"}}>*Tiene que ser una fecha valida, con el año mayor a 0.</p>
                <form>
                    <label>
                        Año:
                        <input style={style.inputS} type="text" placeholder="year > 0" value={this.state.year} onChange={this.handleChangeYear}/>
                    </label>
                    <label>
                        Mes:
                        <input style={style.inputS} type="text" placeholder="1 - 12" value={this.state.month} onChange={this.handleChangeMonth}/>
                    </label>
                    <label>
                        Día:
                        <input style={style.inputS} type="text" placeholder="1 - 31" value={this.state.day} onChange={this.handleChangeDay}/>
                    </label>
                </form>
                <button onClick={()=>{this.setState({date: true})}}> submit </button>
                {dateV}
            </div>
        )
    }
}


var style = {
    inputS:{
        width: 50,
    }
}







//PROGRAMA 3
class P3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageP1: 3,
            imageP2: 3
        };
    }

    nextImage1(){
        if(this.state.imageP1 === 1){
            this.setState({imageP1: 2})
        }else if(this.state.imageP1 === 2){
            this.setState({imageP1: 3})
        }else if(this.state.imageP1 === 3){
            this.setState({imageP1: 1})
        }
    }
    nextImage2(){
        if(this.state.imageP2 === 1){
            this.setState({imageP2: 2})
        }else if(this.state.imageP2 === 2){
            this.setState({imageP2: 3})
        }else if(this.state.imageP2 === 3){
            this.setState({imageP2: 1})
        }
    }

    componentDidMount(){
        this.nextImage1();
        this.nextImage2();
    }

    render(){
        var images = {
            1: "https://png2.kisspng.com/sh/25b2f1556634c497aa7ecbe3d436d21f/L0KzQYm3V8A0N5psR91yc4Pzfri0kv9kc15pitNCaX7qPbTzigAuaaN5ReR4Y3vogsq0lvVkfJD3RadrM3K3dYeBhsE0a2k9RqICOEm2RYq6UcU0OGc2S6UAMkm7SIK1kP5o/kisspng-rock-drawing-clip-art-rockery-vector-5b3b4e68f13c88.0789359315306133529881.png",
            2: "https://www.clipartmax.com/png/full/4-40202_drawing-clipart-scissors-scissors-clip-art-black-and-white.png",
            3: "https://d347awuzx0kdse.cloudfront.net/sydneyartstore/images/resized/f8ecde09099b450b5caac1f962e8e529586a3bdb.jpg"
        }

        return (
            <div style={{padding:0, paddingLeft:"1%",display:"flex", height:"100%" }}>
                <div style={{padding:0, backgroundColor:"red", height:"100%",width:"100%", textAlign:"center" }}>
                    <p style={{margin: 0,padding:0, paddingTop:"1%", color:"white"}}>Selecciona una.</p>
                    <div>
                        <button> <img height={120} width={120} src={images[this.state.imageP1]}/> </button>
                        <button onClick={ ()=>{ this.nextImage1();}}> next </button>
                    </div>

                </div>
                <div style={{padding:0, backgroundColor:"blue", height:"100%",width:"100%", textAlign:"center" }}>
                    <p style={{margin: 0,padding:0, paddingTop:"1%", color:"white"}}>Selecciona una.</p>
                    <div>
                        <button> <img height={120} width={120}  src={images[this.state.imageP2]}/> </button>
                        <button onClick={ ()=>{ this.nextImage2();}}> next </button>

                    </div>

                </div>
            </div>
        )
    }
}

//EXPORT HERE ---------------------------------------------------------------------------------------
export default [
    {
        tittle: "sl.p1",
        code: <P1 />,
        fullB:false
    },
    {
        tittle: "sl.p2",
        code: (
            <div>
                <h3>p2</h3>
            </div>
        ),
        fullB:true
    },
    {
        tittle: "sl.p3",
        code: <P3 />,
        fullB:false
    },
];