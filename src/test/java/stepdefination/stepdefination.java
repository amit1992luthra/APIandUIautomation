package stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;


public class stepdefination {
	
	
	WebDriver driver = hooksclass.driver;

	@Given("^User should be navigated to the main Application$")
	public void user_should_be_navigated_to_the_main_Application() {
		
		driver.get("http://localhost:8080/");
		
	   
	}

	@When("^User click on Add new Product button$")
	public void user_click_on_Add_new_Product_button()  {
	   
		driver.findElement(By.xpath("(//a)[1]")).click();
	}

	@When("^Enter Price \"([^\"]*)\" Name \"([^\"]*)\" and Description \"([^\"]*)\"$")
	public void enter_Price_Name_and_Description(String price, String name, String description)  {
	    
		driver.findElement(By.name("name")).sendKeys(name);
		driver.findElement(By.name("price")).sendKeys(price);
		driver.findElement(By.name("description")).sendKeys(description);
	}

	@When("^Click on save button$")
	public void click_on_save_button() 
 {
		driver.findElement(By.xpath("//button")).click();
	}

	@Then("^Priduct ID will be generated$")
	public void priduct_ID_will_be_generated() throws Exception  {
		
		Assert.assertEquals(driver.findElement(By.xpath("//td/strong[text()='ID:']")).getText(),"ID:");
		
	    
	}
	
	@When("^User click on Available Products button$")
	public void user_click_on_Available_Products_button() {
		driver.findElement(By.xpath("(//a)[2]")).click();
	   
	}

	@Then("^Product list should be displayed$")
	public void product_list_should_be_displayed() {
		
		Assert.assertEquals(driver.findElement(By.xpath("//h2")).getText(),"Available products");
	   
	}
	
	@When("^click on Edit Product for id \"([^\"]*)\"$")
	public void click_on_Edit_Product_for_id(String id)  {
		try
		{
			driver.findElement(By.xpath("//td[text()='"+id+"']/parent::tr/td/a[text()='Edit product']")).click();
		}
		catch(Exception ex)
		   {
			   System.out.println("ID is Not present in the list");
		   }
	    
	}

	@When("^Enter \"([^\"]*)\" name for modification$")
	public void enter_name_for_modification(String name) {
		driver.findElement(By.name("name")).clear();
		driver.findElement(By.name("name")).sendKeys(name);
	   
	}

	@Then("^Product ID will be modified \"([^\"]*)\"$")
	public void product_ID_will_be_modified(String expname)  {
		String Actualname = driver.findElement(By.xpath("//td/strong[text()='Name:']/parent::td/following-sibling::td/span")).getText();
		Assert.assertEquals(Actualname, expname);
	}
	
	@Then("^click on Delete Product for id \"([^\"]*)\"$")
	public void click_on_Delete_Product_for_id(String id)  {
	   try
	   {
		   driver.findElement(By.xpath("//td[text()='"+id+"']/parent::tr/td/a[text()='Delete product']")).click();
		   
	   }
	   catch(Exception ex)
	   {
		   System.out.println("ID is Not present in the list");
	   }
	}

	
	
}
