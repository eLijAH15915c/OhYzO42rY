// 代码生成时间: 2025-09-23 12:55:10
const xlsx = require('xlsx'); // 引入xlsx库，用于操作Excel文件
const _ = require('lodash'); // 引入lodash库，用于数据处理

/**
 * Excel表格自动生成器
 * @param {Array} data - 要生成表格的数据
 * @param {string} sheetName - 工作表名称
 * @param {string} filename - 要生成的Excel文件名
 */
function generateExcel(data, sheetName, filename) {
  // 检查输入数据
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Invalid data: data should be a non-empty array.');
  }

  // 创建工作簿
  const workbook = xlsx.utils.book_new();

  // 创建工作表
  const worksheet = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);

  // 生成Excel文件
  try {
    // 将工作簿写入文件
    xlsx.writeFile(workbook, filename);
    console.log(`Excel file ${filename} generated successfully!`);
  } catch (error) {
    console.error('Failed to generate Excel file:', error);
  }
}

/**
 * 示例用法
 */
try {
  // 假设这是从数据库或其他来源获取的数据
  const sampleData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 40, city: 'Chicago' }
  ];

  // 调用函数生成Excel文件
  generateExcel(sampleData, 'Sample Sheet', 'sample_data.xlsx');
} catch (error) {
  console.error(error.message);
}
