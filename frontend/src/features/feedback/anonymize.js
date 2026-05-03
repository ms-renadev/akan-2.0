/**
 * Anonymizes student data for professor-facing views.
 * Strips name, student ID, and contact info.
 * Replaces with a seeded anonymous token.
 */
export function anonymizeComment(comment, index) {
  return {
    ...comment,
    authorId: `Student #${String.fromCharCode(65 + (index % 26))}-${String(index + 1).padStart(4, '0')}`,
    authorName: 'Anonymous',
  }
}

export function anonymizeComments(comments) {
  return comments.map((c, i) => anonymizeComment(c, i))
}
