package com.example.tasklistapi.dto;

import com.example.tasklistapi.enumeration.TaskStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class TaskDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = -6762432601286928295L;

    @Override
    public String toString() {
        return String.format("(id: %d, title: %s, description: %s)", id, title, description);
    }

    private Long id;
    private String description;
    private String title;
    private TaskStatus status;
}
