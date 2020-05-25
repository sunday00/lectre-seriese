package dto;

import java.util.ArrayList;

public class ProductRepository {
	private ArrayList<Product> listOfProducts = new ArrayList<Product>();
	private static ProductRepository instance = new ProductRepository();
	
	public static ProductRepository getInstance() {
		return instance;
	}
	
	public ProductRepository () {
		Product phone = new Product("P1111","iPhone4", 5000000);
			
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
	
	public Product getProductById(String productId) {
		Product productById = null;
		
		for (int i = 0; i < listOfProducts.size(); i++) {
			Product product = listOfProducts.get(i);
			if (product != null && product.getProductId().equals(productId)) {
				productById = product;
				break;
			}
		}
		
		return productById;
	}
	
	public void addProduct(Product p) {
		listOfProducts.add(p);
	}
	
	
	
}















//
