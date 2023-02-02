package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.RecordDetailResponseDto;
import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;
import com.ssafy.dmb.service.RecordServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/record")
public class RecordController {
    private final RecordServiceImpl recordService;

    @PostMapping()
    public String saveRecord(@RequestPart MultipartFile multipartFile
            , @RequestPart RecordDto recordDto) throws IOException {

        String url = recordService.upload(multipartFile, "dearmybucket", "dmb");

        recordService.saveRecord(url, recordDto);
        return url;
    }

    @GetMapping("/day")
    public List<RecordResponseDto> getDayRecordList(@RequestParam("dayId") Long dayId, @RequestParam("planId") Long planId ) throws IOException {
        return recordService.getDayRecordList(dayId, planId);
    }

    @GetMapping("/plan")
    public List<RecordResponseDto> getPlanRecordList(@RequestParam("planId") Long planId) throws IOException {
        return recordService.getPlanRecordList(planId);
    }

    @GetMapping("/detail")
    public RecordDetailResponseDto getRecord(@RequestParam("recordId") Long recordId) throws IOException {
        return recordService.getRecord(recordId);
    }

    @DeleteMapping()
    public void deleteRecord(@RequestParam("recordId") Long recordId) throws IOException {
        recordService.deleteRecord(recordId);
    }

    @PutMapping()
    public void changeRecordText(@RequestParam("recordId") Long recordId, @RequestParam("recordText") String recordText) throws IOException {
        recordService.changeRecordText(recordId, recordText);
    }

}
