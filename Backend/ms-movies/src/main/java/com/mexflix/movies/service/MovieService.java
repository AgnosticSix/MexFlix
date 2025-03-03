package com.mexflix.movies.service;

import com.mexflix.movies.model.Movie;
import com.mexflix.movies.repository.MovieRepository;

//import com.mexflix.movies.repository.MovieRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MovieService {

private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

}


 /*  private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }*/

   /* public List<Movie> getAllMovies() {
        return List.of(
            new Movie(1L, "Inception", "Sci-Fi", 2010),
            new Movie(2L, "Interstellar", "Sci-Fi", 2014),
            new Movie(3L, "The Dark Knight", "Action", 2008)
        );

        // modificar terunt y trae metodo get all 200 status 
    }*/