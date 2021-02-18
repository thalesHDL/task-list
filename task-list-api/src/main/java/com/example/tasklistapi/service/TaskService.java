package com.example.tasklistapi.service;

import com.example.tasklistapi.dto.TaskDTO;

import java.util.List;

public interface TaskService {
    List<TaskDTO> getAll();
}
