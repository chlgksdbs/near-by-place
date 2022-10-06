package Sumis100.nearbyplace.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ConnectController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }


}
