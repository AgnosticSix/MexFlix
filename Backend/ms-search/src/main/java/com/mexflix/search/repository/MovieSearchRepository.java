package com.mexflix.search.repository;

import com.mexflix.search.model.MovieDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MovieSearchRepository extends ElasticsearchRepository<MovieDocument, String> {
    List<MovieDocument> findByTitleContainingIgnoreCase(String title);
}
