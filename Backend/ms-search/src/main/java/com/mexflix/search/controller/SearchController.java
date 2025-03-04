package com.mexflix.search.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("") 
public class SearchController {

    @GetMapping("/test")
    public String testSearch() {
        return "El servicio de búsqueda está funcionando!";
    }
}
