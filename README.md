## Quy trình làm việc với git
### 1. Tạo nhánh mới từ nhánh dev
```
git checkout -b <ten_nhanh(ten_chuc_nang)> dev
```
### 2. Push lên GitHub
```
1. git add .
2. git commit -m "<ghi_chu>"
3. git push origin <ten_nhanh>
```

**Lưu ý: để push lại code vào một commit trước đó, làm như sau:**
```
1. git add .
2. git commit --amend
3. git push origin <ten_nhanh> -f
```

### 3. Merge code từ nhánh hiện tại vào nhánh dev (Khi hoàn thành chức năng)
- Tạo *Pull requets* trên Github
- So sánh code
- Merge code 
### 4. Xoá nhánh
Xóa nhánh local:
```
git checkout dev
git branch -D <ten_nhanh>
```
Xóa nhánh remote (Github)
```
git push origin -d <ten_nhanh>
```
### 5. Pull code mới
```
git pull origin dev
```
### 6. Lặp lại bước 1
