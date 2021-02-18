package com.example.tasklistapi.mapper;

import com.example.tasklistapi.domain.model.Task;
import com.example.tasklistapi.dto.TaskDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    TaskDTO entityToDto(Task entity);
}
