// 代码生成时间: 2025-11-04 16:31:25
// Import lodash library
const _ = require('lodash');

class TextSummaryGenerator {
  // Constructor
  constructor() {
    // Initialize any necessary variables
  }

  // Method to generate summary
  * generateSummary(text, maxLength = 100) {
    // Check if text is provided
    if (!text) {
      throw new Error('No text provided');
    }

    // Check if maxLength is a positive integer
    if (!Number.isInteger(maxLength) || maxLength <= 0) {
      throw new Error('Invalid maxLength. It must be a positive integer.');
    }

    // Split text into sentences
    const sentences = text.split('. ');

    // Trim sentences and remove empty ones
    sentences.forEach((sentence, index) => {
      sentences[index] = sentence.trim();
    });
    sentences.length = _.remove(sentences, sentence => sentence === '').length;

    // Filter sentences based on word count
    const filteredSentences = sentences.filter(sentence => sentence.split(' ').length <= maxLength / 5);

    // Join filtered sentences
    const summary = filteredSentences.join('. ');

    // Trim summary to maxLength
    summary.length = Math.min(summary.length, maxLength);

    // Return summary
    return summary;
  }
}

// Example usage
try {
  const generator = new TextSummaryGenerator();
  const text = 'This is an example text for the text summary generator. It should generate a summary of the given text. The summary should be concise and capture the essence of the text.';
  const summary = generator.generateSummary(text, 100);
  console.log('Summary:', summary);
} catch (error) {
  console.error('Error:', error.message);
}
