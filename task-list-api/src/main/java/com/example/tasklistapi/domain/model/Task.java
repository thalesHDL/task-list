package com.example.tasklistapi.domain.model;

import com.example.tasklistapi.enumeration.TaskStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Task")
public class Task implements Serializable {
    @Serial
    private static final long serialVersionUID = -6762432601286928295L;

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "TITLE")
    private String title;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "STATUS")
    private TaskStatus status;
}
