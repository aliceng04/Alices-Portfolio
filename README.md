# Alices-Portfolio

Live: https://aliceng04.github.io/Alices-Portfolio

Built with Astro + Tailwind. Every push to `main` deploys automatically (GitHub Actions → GitHub Pages, ~1–2 minutes).

## Thêm một bài mới

1. Tạo thư mục `src/content/work/<ten-bai>/` (tên không dấu, nối bằng gạch ngang, ví dụ `onboarding-b2b`). Tên này thành link: `/work/onboarding-b2b/`.
2. Copy `docs/TEMPLATE.mdx` vào thư mục đó, đổi tên thành `index.mdx`.
3. Điền phần đầu file (giữa hai dòng `---`), viết nội dung, xóa những khối không dùng.
4. Ảnh và diagram đặt cùng thư mục, rồi `import` ở đầu file (xem mẫu).
5. Đổi `draft: true` thành `draft: false` khi muốn đăng.
6. Commit và push lên `main`. Xong.

**Trên trình duyệt:** vào repo trên github.com → `src/content/work` → **Add file → Upload files** (kéo cả thư mục vào) → **Commit changes**.

**Lưu ý:** repo public, nên bài `draft: true` không hiện trên web nhưng ai vào repo vẫn đọc được.

## Các khối có thể dùng trong bài

| Khối | Dùng khi |
|---|---|
| `<KeyInsight>` | Một phát hiện quan trọng |
| `<Quote who role>` | Trích lời người dùng |
| `<Metrics items>` | Số liệu |
| `<Slides>` + `<Slide title>` | Kể từng bước, mỗi slide một ý |
| `<Diagram>` + `<Swimlane>` | Swimlane viết bằng dữ liệu, tự đổi màu theo dark mode |
| `<Diagram src srcDark>` | Diagram xuất SVG từ Figma/Reqwise (2 bản sáng/tối) |
| `<Comparison>` | So sánh phương án, đánh dấu phương án chọn |
| `<Gallery images>` | Ảnh màn hình, bấm để phóng to |
| `<Prototype src \| figma>` | Prototype bấm thử được (code trong `public/prototypes/` hoặc link Figma) |

TL;DR và thông tin vai trò/thời gian lấy từ phần đầu file, không cần viết lại trong bài.

## Sửa thông tin cá nhân

`src/data/profile.ts`: tên, câu hero, giới thiệu, kỹ năng, email, LinkedIn.

## Loại bài

`src/lib/types.ts`. Bộ lọc ở trang Work chỉ hiện những loại đã có bài, và ẩn khi mới có một loại.

## Chạy trên máy

```sh
npm install
npm run dev      # http://localhost:4321/Alices-Portfolio/
npm run build    # kiểm tra trước khi push
```
