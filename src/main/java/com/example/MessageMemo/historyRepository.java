package com.example.MessageMemo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface historyRepository extends CrudRepository<history, Integer> {
	@Query(value="select t_message.m_id as m_id"
			+ " ,t_message.RECEIV_TIME as receive_time"
			+ " ,t_message.to_name as to_name"
			+ " ,m_customer.c_name as c_name"
			+ " ,t_message.sender as sender"
			+ " ,t_message.message_cd as message_cd"
			+ " ,m_employee.e_name as e_name"
			+ " from t_message"
			+ " left join m_customer"
			+ " on t_message.custmer_cd = m_customer.c_cd"
			+ " left join m_employee"
			+ " on t_message.receiver_cd = m_employee.e_num;"
			, nativeQuery = true)
	
	List<history>historia();
}