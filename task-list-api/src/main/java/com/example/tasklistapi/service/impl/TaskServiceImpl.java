package com.example.tasklistapi.service.impl;

import com.example.tasklistapi.domain.repository.TaskRepository;
import com.example.tasklistapi.dto.TaskDTO;
import com.example.tasklistapi.mapper.TaskMapper;
import com.example.tasklistapi.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository repository;
    private final TaskMapper mapper;

    @Override
    public List<TaskDTO> getAll() {
        return repository.findAll().stream()
                .map(mapper::entityToDto)
                .collect(Collectors.toList());
    }
}
