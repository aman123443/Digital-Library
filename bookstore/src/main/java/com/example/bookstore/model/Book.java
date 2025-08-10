package com.example.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String isbn;

    @Column(columnDefinition = "TEXT")
    private String description;

    // This will be for the DOWNLOAD button (e.g., the .epub link)
    private String contentUrl;

    // This is the NEW field for the READ ONLINE feature (the .html link)
    private String readUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;
}
