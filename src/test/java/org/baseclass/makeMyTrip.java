package org.baseclass;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class makeMyTrip {
	
//	public static void main(String[] args) throws IOException {
//		List<String> li = new ArrayList<String>();
//		li.add("10");
//		li.add("ram");
//		li.add("denna");
//		File file = new File("D:\\photon eclipse\\CucumberTask2\\workbook\\Book1.xlsx");
//		Workbook workbook= new XSSFWorkbook();
//		Sheet createSheet = workbook.createSheet("Book1");
//		Row createRow = createSheet.createRow(1);
//		for (int i = 0; i < li.size(); i++) {
//			Cell createCell = createRow.createCell(i);
//			createCell.setCellValue( li.get(i));
//			}
//		FileOutputStream fileOutputStream = new FileOutputStream(file);
//		workbook.write(fileOutputStream);
		
	public static void main(String[] args) throws IOException {
		List<String> lii = new ArrayList<String> ();
		lii.add("10");
		lii.add("focus");
		lii.add("hello");
		
		File file = new File("D:\\photon eclipse\\CucumberTask2\\workbook\\Book1.xlsx");
		FileInputStream fileInputStream = new FileInputStream(file);
		Workbook workbook = new  XSSFWorkbook(fileInputStream);
		Sheet createSheet = workbook.createSheet("Book1");
		Row createRow = createSheet.createRow(2);
		for (int i = 0; i < lii.size(); i++) {
				Cell createCell = createRow.createCell(i);
				createCell.setCellValue(lii.get(i) );
		}
		FileOutputStream fileOutputStream= new FileOutputStream(file);
		workbook.write(fileOutputStream);
	}



































}


