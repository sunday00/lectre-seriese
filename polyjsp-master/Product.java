package dto;

import java.io.Serializable;

public class Product implements Serializable {
	private static final long serialVersion = -427470057203867700L;
	
	private String productId;
	private String pName;
	private Integer unitPrice;
	private String description;
	private String manufacturer;
	private String category;
	private long unitInStock;
	private String condition;
	
	public Product() {}
	public Product(String productId, String pName, Integer unitPrice) {
		this.productId = productId;
		this.pName = pName;
		this.unitPrice = unitPrice;
	}
	public Product(String productId, String pName, Integer unitPrice,
			String description, String manufacturer, String category, 
			long unitInStock,  String condition) {
		this.productId = productId;
		this.pName = pName;
		this.unitPrice = unitPrice;
		
		this.description = description;
		this.manufacturer = manufacturer;
		this.category = category;
	}
	
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public int getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public long getUnitInStock() {
		return unitInStock;
	}
	public void setUnitInStock(long unitInStock) {
		this.unitInStock = unitInStock;
	}
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	
}
