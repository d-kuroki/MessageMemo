package com.example.MessageMemo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;


@Entity
public class history {
	@Id
	private int m_id;	
	private Timestamp receive_time;	
	private String to_name;	
	private String c_name;	
	private String sender;	
	private String message_cd;	
	private String e_name;
	
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public String getReceive_time() {
		return dateFormat();
	}
	//受電日時フォーマット
	public String dateFormat() {
		
		SimpleDateFormat simpledateformat = new SimpleDateFormat("yyyy/MM/dd hh:mm");
		String formatedDate = simpledateformat.format(this.receive_time);
		
		return formatedDate;
	}
	
	
	public void setReceive_time(Timestamp receive_time) {
		this.receive_time = receive_time;
	}
	public String getTo_name() {
		return to_name;
	}
	public void setTo_name(String to_name) {
		this.to_name = to_name;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getMessage_cd() {
		if(message_cd.equals("1")) {
			setMessage_cd("もう一度お願いします");
		}else if(message_cd.equals("2")) {
			setMessage_cd("折り返しお願いします");
		}else if(message_cd.equals("3")){
			setMessage_cd("伝言あります");
		}
		return message_cd;
	}
	public void setMessage_cd(String message_cd) {
		this.message_cd = message_cd;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	
}