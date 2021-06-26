package RestAssuredTestCases;

import static io.restassured.RestAssured.given;

import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class APIProject {

	@Test
	public void AddProduct(ITestContext obj) {

		JSONObject jsonbody = new JSONObject();

		jsonbody.put("name", "Product1");
		jsonbody.put("price", 50);
		jsonbody.put("description", "Decription about product");

		System.out.println(jsonbody);

		RestAssured.baseURI = "http://localhost:8080";

		Response resp = given()
							.headers("content-type", "application/json")
							.body(jsonbody.toString()).
						when()
							.post("/v1/products").
						then()
							.statusCode(201)
							.log().all()
							.extract().response();
		
		String id = resp.jsonPath().getString("id");
		obj.setAttribute("id", id);

	}

	@Test(dependsOnMethods = { "AddProduct" })
	public void ModifyProduct(ITestContext obj) {

		JSONObject jsonbody = new JSONObject();

		jsonbody.put("name", "Product Modified");
		jsonbody.put("price", 50);
		jsonbody.put("description", "Decription about product");

		System.out.println(jsonbody);

		RestAssured.baseURI = "http://localhost:8080";

		given()
			.headers("content-type", "application/json")
			.body(jsonbody.toString()).
		when()
			.patch("/v1/products/" + obj.getAttribute("id").toString()).
		then()
			.statusCode(418)
			.log().all();

	}

	@Test(dependsOnMethods = { "AddProduct" })
	public void getspecificproduct(ITestContext obj) {

		RestAssured.baseURI = "http://localhost:8080";

		Response resp = given()
							.get("/v1/products/" + obj
							.getAttribute("id").toString()).
						then()
							.statusCode(200)
							.log().all()
							.extract().response();

	}

	@Test(dependsOnMethods = { "AddProduct" })
	public void getallproduct() {

		RestAssured.baseURI = "http://localhost:8080";

		given().get("/v1/products").then().statusCode(200).log().all();
	}

	@Test(enabled = true, dependsOnMethods = { "AddProduct", "ModifyProduct", "getspecificproduct" })
	public void deleteproduct(ITestContext obj) {

		RestAssured.baseURI = "http://localhost:8080";

		given()
			.delete("/v1/products/" + obj.getAttribute("id").toString()).
		then()
			.statusCode(204)
			.log().all();
	}

}