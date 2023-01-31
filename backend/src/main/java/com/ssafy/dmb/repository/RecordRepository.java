package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.record.Record;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<Record,Long> {
}
