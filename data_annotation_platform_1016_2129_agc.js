// 代码生成时间: 2025-10-16 21:29:51
// Importing lodash for utility functions
const _ = require('lodash');

// Annotation storage
let annotations = [];

/**
 * Adds an annotation to the platform.
 * 
 * @param {Object} annotation - The annotation object to add.
 * @returns {Object} - The added annotation.
 */
function addAnnotation(annotation) {
  if (!_.isObject(annotation)) {
    throw new Error('Annotation must be an object.');
  }
  annotations.push(annotation);
  return annotation;
}

/**
 * Retrieves an annotation by its unique identifier.
 * 
 * @param {string} id - The unique identifier of the annotation.
 * @returns {Object|null} - The annotation object or null if not found.
 */
function getAnnotationById(id) {
  const annotation = _.find(annotations, { id });
  if (!annotation) {
    return null;
  }
  return annotation;
}

/**
 * Updates an existing annotation.
 * 
 * @param {string} id - The unique identifier of the annotation to update.
 * @param {Object} updates - The update object.
 * @returns {Object|null} - The updated annotation or null if not found.
 */
function updateAnnotation(id, updates) {
  const annotation = getAnnotationById(id);
  if (!annotation) {
    return null;
  }
  _.merge(annotation, updates);
  return annotation;
}

/**
 * Deletes an annotation by its unique identifier.
 * 
 * @param {string} id - The unique identifier of the annotation to delete.
 * @returns {Object|null} - The deleted annotation or null if not found.
 */
function deleteAnnotation(id) {
  const index = _.findIndex(annotations, { id });
  if (index === -1) {
    return null;
  }
  return annotations.splice(index, 1)[0];
}

// Example usage
try {
  const newAnnotation = addAnnotation({ id: '001', data: 'Sample data', created: new Date() });
  console.log('Added Annotation:', newAnnotation);

  const retrievedAnnotation = getAnnotationById('001');
  console.log('Retrieved Annotation:', retrievedAnnotation);

  const updatedAnnotation = updateAnnotation('001', { updated: new Date() });
  console.log('Updated Annotation:', updatedAnnotation);

  const deletedAnnotation = deleteAnnotation('001');
  console.log('Deleted Annotation:', deletedAnnotation);
} catch (error) {
  console.error('Error:', error.message);
}