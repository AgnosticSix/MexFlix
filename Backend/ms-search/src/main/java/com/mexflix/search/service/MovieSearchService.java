package com.mexflix.search.service;

import com.mexflix.search.model.MovieDocument;
import com.mexflix.search.repository.MovieSearchRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MovieSearchService {
    private final MovieSearchRepository movieSearchRepository;

    public MovieSearchService(MovieSearchRepository movieSearchRepository) {
        this.movieSearchRepository = movieSearchRepository;
    }

    public MovieDocument save(MovieDocument movie) {
        return movieSearchRepository.save(movie);
    }

    public List<MovieDocument> searchByTitle(String title) {
        return movieSearchRepository.findByTitleContainingIgnoreCase(title);
    }

    public Iterable<MovieDocument> getAllMovies() {
        return movieSearchRepository.findAll();
    }
}
