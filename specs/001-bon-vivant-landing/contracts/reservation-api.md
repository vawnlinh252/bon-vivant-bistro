# Contract: Reservation API Endpoint

**Endpoint**: `POST /api/reservation`  
**Consumes**: `application/json`  
**Produces**: `application/json`  

---

## 1. Request Specification

### Headers
```http
Content-Type: application/json
Accept: application/json
```

### JSON Body Schema
```json
{
  "fullName": "Nguyễn Văn An",
  "phoneNumber": "0901234567",
  "email": "an.nguyen@example.com",
  "date": "2026-10-15",
  "time": "19:00",
  "partySize": 4,
  "specialNotes": "Bàn cạnh cửa sổ lãng mạn, kỷ niệm ngày cưới."
}
```

### Field Constraints
| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `fullName` | string | Yes | 2 to 100 chars | Tên đầy đủ của thực khách |
| `phoneNumber` | string | Yes | Regex: Vietnamese mobile number | Số điện thoại liên hệ |
| `email` | string | Yes | Valid email format | Email nhận thông tin xác nhận |
| `date` | string | Yes | Format `YYYY-MM-DD`, >= today | Ngày dùng bữa |
| `time` | string | Yes | Format `HH:mm`, within operational shifts | Giờ đến nhà hàng |
| `partySize` | integer | Yes | 1 to 20 | Số lượng khách |
| `specialNotes` | string | No | Max 500 chars | Yêu cầu đặc biệt hoặc dị ứng thực phẩm |

---

## 2. Response Specifications

### Success (200 OK)
Sent when the reservation data passes server validation and the email notification is dispatched (or mocked in development).

```json
{
  "success": true,
  "message": "Yêu cầu đặt bàn đã được tiếp nhận. Đội ngũ lễ tân sẽ liên hệ trong 15-30 phút.",
  "bookingRef": "BV-20261015-8831",
  "summary": {
    "fullName": "Nguyễn Văn An",
    "phoneNumber": "0901234567",
    "date": "2026-10-15",
    "time": "19:00",
    "partySize": 4
  }
}
```

### Validation Error (400 Bad Request)
Sent when one or more fields fail validation constraints.

```json
{
  "success": false,
  "message": "Dữ liệu đặt bàn không hợp lệ.",
  "errors": {
    "phoneNumber": ["Số điện thoại không đúng định dạng."],
    "date": ["Ngày đặt bàn không thể ở trong quá khứ."]
  }
}
```

### Server Error (500 Internal Server Error)
Sent when unexpected server runtime or email dispatcher fails.

```json
{
  "success": false,
  "message": "Hệ thống đang bận. Vui lòng liên hệ trực tiếp hotline 028 3822 xxxx để giữ chỗ nhanh nhất."
}
```
