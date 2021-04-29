var app = new Vue({
    el: '#app',
    data: {
        seatStates: {
            sold: {
                text: "Sold",
                color: "#ff0000"
            },
            available: {
                text: "Available",
                color: "#fff"
            },
            booked: {
                text: "Booked",
                color: "gray"
            },
            selected: {
                text: "Selected",
                color: "#00ff00"
            }
        },
        seats: [
            {
                name: "A1",
                type: "available",
                price: 500
            },
            {
                name: "A2",
                type: "available",
                price: 500
            },
            {
                name: "A3",
                type: "available",
                price: 500
            },
            {
                name: "A4",
                type: "available",
                price: 500
            },
            {
                name: "B1",
                type: "available",
                price: 450
            },
            {
                name: "B2",
                type: "available",
                price: 450
            },
            {
                name: "B3",
                type: "available",
                price: 450
            },
            {
                name: "B4",
                type: "available",
                price: 450
            },
            {
                name: "C1",
                type: "sold",
                price: 500
            },
            {
                name: "C2",
                type: "sold",
                price: 500
            },
            {
                name: "C3",
                type: "sold",
                price: 500
            },
            {
                name: "C4",
                type: "sold",
                price: 500
            },
            {
                name: "D1",
                type: "available",
                price: 400
            },
            {
                name: "D2",
                type: "available",
                price: 400
            },
            {
                name: "D3",
                type: "available",
                price: 400
            },
            {
                name: "D4",
                type: "available",
                price: 400
            },
            {
                name: "E1",
                type: "available",
                price: 300
            },
            {
                name: "E2",
                type: "available",
                price: 300
            },
            {
                name: "E3",
                type: "booked",
                price: 300
            },
            {
                name: "E4",
                type: "booked",
                price: 300
            },
            {
                name: "F1",
                type: "available",
                price: 300
            },
            {
                name: "F2",
                type: "available",
                price: 300
            },
            {
                name: "F3",
                type: "available",
                price: 300
            },
            {
                name: "F4",
                type: "available",
                price: 300
            }
        ],
        discount: 0,
        totalamount : 0,
        subtotal : 0,
        confirmed:false,
        name:'',
        mobile:''
    },
    computed:{
        selectedSeats(){
            return this.seats.filter((seat)=> seat.type === "selected"  )
        },
        totalCost(){
            let totalcost = 0;
            this.selectedSeats.forEach(function (item){
                totalcost += item.price;
            })
            return totalcost;
        },
        subtotalCost(){
            return this.totalCost - this.discount;
        }
    },
    methods:{
        selectedSeat(index){
            let selectSeat = this.seats[index];



            if (selectSeat.type == "booked" || selectSeat.type == "sold" ){
                alert("this seat is booked");
                return ;
            }

            if (this.selectedSeats.length >2){
                alert("You can select more than 3 seats!");
                return ;
            }

            selectSeat.type =  selectSeat.type === "selected" ? "available":"selected";

            this.selectedSeats.forEach(function (item){
                console.log(item.price);
            })


        },
        confirm(){
            if ( ! this.name || !this.mobile ){
                alert("please enter name & number")
                return;
            }

            this.confirmed = true;



        },
        resetData(){
            this.confirmed = false;
            this.name = "";
            this.mobile = "";
            this.discount = 0;
            this.selectedSeats.forEach(function (item){
                item.type = "booked";
            })
        }
    }
})