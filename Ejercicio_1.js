var flag = true;
var articles = [];
var sales = [];

function createNewArticle(id,remark,type,purchasePrice, salePrice, stock)
{
    var article = {id, remark, type, purchasePrice, salePrice, stock};

    return articles.push(article);
}

function stockModify()
{
  alert("Tareas de mantenimiento en proceso, ¡REGRESAREMOS PRONTO!");
}

function showAverageSales()
{
  averageSale = 0;

  for (sale of sales)
  {
    averageSale += sale.salePrice;
  }

  averageSale = averageSale / sales.length();

  alert("El promedio de ventas es: " + averageSale);

  return;
}

function showArticles()
{
  articles.forEach(element => {
    console.log('Articulo: ' + element.remark + 'Stock: ' + element.stock)
  });
}

function createNewSale(idSale, idArticle, quantity)
{

  var sale = {idSale, idArticle, quantity, "salePrice": 0};

  articles.forEach((element, idArticle, quantity, sale) => {
    if(element.id == idArticle)
    {
      element.stock -= quantity;
      sale.salePrice = quantity * element.salePrice;
    }
  });
  return sales.push(sale);
}

while(flag)
{
  var opcion = prompt("La Jefecita:\n1.Agregar producto.\n2.Modificar Stock\n3.Registrar venta y reducir stock.\n4.Mostrar promedio de ventas\n5.Mostrar productos con stock.\n6.Salir.");

  switch(opcion)
  {
      case "1":
        id = prompt("Inserte el codigo del articulo")
        remark = prompt("Inserte descripcion del articulo")
        type = prompt("Inserte el tipo del articulo")
        purchasePrice = parseFloat(prompt("Inserte el precio de compra", "0.00"));
        salePrice = parseFloat(prompt("Inserte el precio de venta", "0.00"));
        stock = parseInt(prompt("Inserte el stock del articulo", "0"));

        createNewArticle(id, remark, type, purchasePrice, salePrice, stock);
        break;
      case "2":
        stockModify();
        break;
      case "3":
        idSale = sales.length() + 1;
        idArticle = prompt("Inserte el codigo del articulo a modificar");
        quantity = parseInt(prompt("Inserte la cantidad vendida", "0"));
        createNewSale(idSale, idArticle, quantity);
        break;
      case "4":
        showAverageSales();
        break;
      case "5":
        showArticles();
        break;
      case "6":
        alert("Hasta la proxima jefa");
        flag = false;
        break;
      case null:
        alert("Hasta la proxima jefa");
        flag = false;
        break;
      default:
        alert("Elija una opcion valida :3");
        break;
  }
}
