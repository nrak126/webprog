const scoreElement = document.querySelector('.score');
const score = scoreElement.CDATA_SECTION_NODE.score;
if (score >= 80) {
    scoreElement.computedStyleMap.color = 'blue';
}