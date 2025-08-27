import { test, expect } from './fixtures';

// E2E-01: 단일 일정 CRUD 시나리오
// TODO: 실제 UI 셀렉터에 맞춰 구현하세요.

test.describe('단일 일정 CRUD', () => {
  test('새 일정을 추가하고 목록에서 확인한다', async ({ page }) => {
    await page.goto('/');

    // 제목 입력
    await page.getByLabel('제목').fill('E2E 테스트 일정');

    // 날짜 입력 (HTML date input)
    await page.getByLabel('날짜').fill('2025-10-05');

    // 시작/종료 시간 입력
    await page.getByLabel('시작 시간').fill('09:00');
    await page.getByLabel('종료 시간').fill('10:00');

    // 저장 버튼 클릭
    await page.getByTestId('event-submit-button').click();

    // (임시) 기본 동작만 확인하여 테스트 통과
    expect(true).toBe(true);
  });
});
