package com.mexflix.search.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "movies")
public class MovieDocument {
    
    @Id
    private String id;
    private String title;
    private String originalTitle;
    
    public MovieDocument() {}

    public MovieDocument(String id, String title, String originalTitle) {
        this.id = id;
        this.title = title;
        this.originalTitle = originalTitle;
    }

    // Getters y Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getOriginalTitle() { return originalTitle; }
    public void setOriginalTitle(String originalTitle) { this.originalTitle = originalTitle; }
}
