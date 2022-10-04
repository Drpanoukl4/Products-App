
class Product {
    constructor(name, price, year) {

        this.name = name
        this.price = price
        this.year = year

    }

}

class UI {

    AddProduct(product){

        const List = document.getElementById("Product List")
        const element = document.createElement("div")

            element.innerHTML = `
            <div class="card text-center mb-4">

                <div class="card-body">

                    <strong>Product Name<strong>: ${product.name}
                    <strong>Product Price<strong>: ${product.price}
                    <strong>Product Date<strong>: ${product.date}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                
                </div> 
            
            </div>   
            
            `;

            List.appendChild(element)

    }

    reset(){

        document.getElementById("productForm").reset()

    }

    DeleteProduct(element){
        if (element.name === "delete"){

            element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

        }

    }

    ShowMessagge(messagge, cssClass){

        const div = document.createElement("div")
        div.className = `alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(messagge))

        const container = document.querySelector(".container")
        const app = document.querySelector("#App")
        container.insertBefore(div, app)

        setTimeout(() => {

            document.querySelector(".alert").remove()

        }, 3000)

    }


}

document.getElementById("productForm").addEventListener("submit", () => {
    
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;

        const np = new Product(name, price, date);
        console.log(np)

            const ui = new UI;

            if(name === "" || price === "" || date === ""){

                return ui.ShowMessagge("Field All The Fields","danger")

            }

                ui.AddProduct(np);
                ui.reset()
                ui.ShowMessagge("Product Susscessfully Added","success")


});

const list = document.getElementById("Product List").addEventListener("click", (e) => {
    
    const ui = new UI;
    ui.DeleteProduct(e.target)
    ui.ShowMessagge("Product Susscessfully Deleted","info")


});