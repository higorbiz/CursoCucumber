import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class testeAmbiente {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\higor.biz\\eclipse-workspace\\CursoCucumber\\drivers\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me/logout");

	}

}
