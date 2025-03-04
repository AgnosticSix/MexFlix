package com.mexflix.search.controller;

import com.mexflix.search.model.MovieDocument;
import com.mexflix.search.service.MovieSearchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class MovieSearchController {
    private final MovieSearchService movieSearchService;

    public MovieSearchController(MovieSearchService movieSearchService) {
        this.movieSearchService = movieSearchService;
    }

    // Endpoint para guardar una película en Elasticsearch
    @PostMapping
    public MovieDocument saveMovie(@RequestBody MovieDocument movie) {
        return movieSearchService.save(movie);
    }

    // Endpoint para buscar películas por título
    @GetMapping("/search")
    public List<MovieDocument> searchMovies(@RequestParam String title) {
        return movieSearchService.searchByTitle(title);
    }

    // Endpoint para obtener todas las películas indexadas
    @GetMapping
    public Iterable<MovieDocument> getAllMovies() {
        return movieSearchService.getAllMovies();
    }
}
