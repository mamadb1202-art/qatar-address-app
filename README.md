# Inwani — Qatar Address

Find a Qatar location from zone, street and building numbers. Open Google Maps and Waze.

## GitHub Actions APK

The workflow [`.github/workflows/build-apk.yml`](.github/workflows/build-apk.yml) builds a signed debug-keystore release APK on every push, pull request, and manual **Run workflow**.

1. Upload this repository to GitHub.
2. Open **Actions → Build APK**.
3. Download the artifact **`inwani-apk`**.

APK output path:

```text
android/app/build/outputs/apk/release/app-release.apk
```

## Local build

Requires Node 22, Java 17, and the Android SDK.

```bash
npm ci
npm run android:apk
```

The same APK path is used.

To sign with a Play Store keystore, set these environment variables before `assembleRelease`:

- `RELEASE_STORE_FILE`
- `RELEASE_STORE_PASSWORD`
- `RELEASE_KEY_ALIAS`
- `RELEASE_KEY_PASSWORD`

Without them, the release APK is signed with the Android debug keystore (installable for testing, not for Play Console).
