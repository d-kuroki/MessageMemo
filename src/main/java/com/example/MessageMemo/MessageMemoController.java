package com.example.MessageMemo;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MessageMemoController {
	@Autowired	// This means to get the bean called CustomerRepository
				// Which is auto-generated by Spring, we will use it to handle the data
    private CustomerRepository customerRepository;
    @Autowired
	private EmployeeRepository employeeRepository;
    @Autowired
    private MessageMemoRepository messageMemoRepository;
	
	@RequestMapping("/msgmemo/inputForm")
    public String index(Model model) {
		
		// M_CUSTOMERテーブルの全データを取得
		Iterable<Customer> customerList = customerRepository.findAll();
		Iterable<Employee> employeeList = employeeRepository.findAll();
				
		// モデルに属性追加
		model.addAttribute("customerlist",customerList);
		model.addAttribute("employeelist",employeeList);
		
		// DBアクセスTop画面を表示
        return "insertMessageMemo";
	}
	
//	登録処理
	@PostMapping(path="/msgmemo/inputForm")
	public String addNewMessageMemo(Model model	
													, @RequestParam String to_name //宛先な氏名
													, @RequestParam String receiver_cd
													, @RequestParam String today_year
													, @RequestParam String today_month
													, @RequestParam String today_day
													, @RequestParam (value="radio",required=false)int radio
													, @RequestParam String hour
													, @RequestParam String minute
													, @RequestParam String custmer_cd //発信会社
													, @RequestParam String sender //発信者氏名
													, @RequestParam String message_cd
													, @RequestParam String memo){

	
//	自動採番
		int count =messageMemoRepository.countT_message();
		int m_id;
		if(count == 0) {
			m_id = 1;
		}else {
			m_id = count + 1;
		}
		
//	Pmの時に時間表記が13以上になる処理
		if(radio == 1) {
			int h = Integer.parseInt(hour);
			h = h + 12;
			hour = String.valueOf(h);
		}else if (radio == 0) {
			int h = Integer.parseInt(hour);
			hour = String.valueOf(h);
		}
		
		
//String型からTimestamp型に変更する	
			try {
				SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
				String str = today_year + "-" + today_month + "-" + today_day + " " + hour + ":" + minute;
				Date date = sdFormat.parse(str);
				Timestamp ts = new Timestamp(date.getTime());
				
				Message messageMemoAddData = new Message();
		
		messageMemoAddData.setAll(m_id, to_name, receiver_cd, ts, custmer_cd, sender, message_cd, memo);
		
		model.addAttribute("msg",to_name + "さん宛てのメッセージを登録しました");	
		
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		messageMemoAddData.setUpdate_date(timestamp);
		messageMemoAddData.setUpdate_user("springuser");
		messageMemoAddData.setCreate_date(timestamp);
		messageMemoAddData.setCreate_user("springuser");
		
		messageMemoRepository.save(messageMemoAddData);
		
		}catch (ParseException e) {
				e.printStackTrace();
		}
			
			Iterable<Customer> customerList = customerRepository.findAll();
			Iterable<Employee> employeeList = employeeRepository.findAll();
					
			// モデルに属性追加
			model.addAttribute("customerlist",customerList);
			model.addAttribute("employeelist",employeeList);
			
		return "insertMessageMemo.html";
	}
	
}