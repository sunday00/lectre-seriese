package dto;

import java.util.ArrayList;

public class ProductRepository {
	private ArrayList<Product> listOfProducts = new ArrayList<Product>();
	
	public ProductRepository () {
		Product phone = new Product("P1111","iPhome4", 5000000);
			
		phone.setDescription("this is old phone");
		phone.setCategory("phone");
		phone.setCondition("B");
		phone.setManufacturer("Apple");
		phone.setUnitInStock(100);
		
		Product notebook = new Product("N1111","SENSE", 20000000);
		
		notebook.setDescription("very powerfull notebook");
		notebook.setCategory("notebook");
		notebook.setCondition("A");
		notebook.setManufacturer("samsung");
		notebook.setUnitInStock(50);
		
		listOfProducts.add(phone);
		listOfProducts.add(notebook);
	}
	
	public ArrayList<Product> getProductList(){
		return listOfProducts;
	}
}
