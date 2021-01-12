import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

async function bootstrap() {
  /*const keyFile  = fs.readFileSync('../cert/key.pem');
  const certFile = fs.readFileSync('../cert/cert.pem');*/

  const certFile = "-----BEGIN CERTIFICATE-----\n" +
    "MIIDozCCAosCFDnv0ltSSJNnaQxaXqTglW+q1mFmMA0GCSqGSIb3DQEBCwUAMIGN\n" +
    "MQswCQYDVQQGEwJGUjENMAsGA1UECAwETklDRTENMAsGA1UEBwwETklDRTEUMBIG\n" +
    "A1UECgwLS2l0c3VuZSBMdGQxEDAOBgNVBAsMB0tpdHN1bmUxEDAOBgNVBAMMB0tp\n" +
    "dHN1bmUxJjAkBgkqhkiG9w0BCQEWF21heGVuY2V3aWxtZXNAZ21haWwuY29tMB4X\n" +
    "DTIxMDExMjE4MDAyNVoXDTIyMDExMjE4MDAyNVowgY0xCzAJBgNVBAYTAkZSMQ0w\n" +
    "CwYDVQQIDAROSUNFMQ0wCwYDVQQHDAROSUNFMRQwEgYDVQQKDAtLaXRzdW5lIEx0\n" +
    "ZDEQMA4GA1UECwwHS2l0c3VuZTEQMA4GA1UEAwwHS2l0c3VuZTEmMCQGCSqGSIb3\n" +
    "DQEJARYXbWF4ZW5jZXdpbG1lc0BnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\n" +
    "A4IBDwAwggEKAoIBAQC3zWS/DKV+huajku7+853iTM8RmrKzbmx0MdotWoyfIPzf\n" +
    "tQJN4YGaDDPmkZ7JjwKu/DTSW5JzmOHOL7uo2POQr3j2i1x17eeSoJXUOCQr43ZE\n" +
    "Bm9uWtRFhr2BrtMe7fsq3YEZdj3BWNfInhBYahW1D7y6dLSO8aErWpt1gutCbdho\n" +
    "1gxmkz8GBOaSLMR1ttavAmr11v1zRCUutC2csFtlIW6laQ0/DFocb+gork7YPLj5\n" +
    "wEfYtedyrG0SgQrqnrd57r5lscn5HMEAhoZG7Al/3TtHw92zipvDcXA/irNN1i8d\n" +
    "wYnrk+OyGD+qr+BwxkKBkKFXeHIZ0uuJx0x6lG2vAgMBAAEwDQYJKoZIhvcNAQEL\n" +
    "BQADggEBAHMT+7z9VSaIx9IiUO/Wh20heNP0Ch5/g3Z6XdOJpXMvuVQHIkD2/sO6\n" +
    "aIKIthdFV8hqCjyUE/PWaRV3P+mlZtVPL2Z7mmk39Qifa17szm0FHl0dsWaVyo4v\n" +
    "+pCw6tMadhvWJSNg1tY1edfCwTfBWhJpH1zvDW3Dy5yIt3JrnHSf7HH46f6b6EaZ\n" +
    "W3cix/64Ow+/FEp6STMpxDflleNaysJ3pDQ58em2mVh6qNPjcRvIUAPEiBC296me\n" +
    "gO1AhKKv6kgh7LIcGf5WSEzACgmSEYT5++A/ihOJL3HGUCY6z3bxg33K0qNr9Drm\n" +
    "JE3/C30z6JHs0EJ4PzWOZW2xaPbuuR0=\n" +
    "-----END CERTIFICATE-----"

  const keyFile = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEAt81kvwylfobmo5Lu/vOd4kzPEZqys25sdDHaLVqMnyD837UC\n" +
    "TeGBmgwz5pGeyY8Crvw00luSc5jhzi+7qNjzkK949otcde3nkqCV1DgkK+N2RAZv\n" +
    "blrURYa9ga7THu37Kt2BGXY9wVjXyJ4QWGoVtQ+8unS0jvGhK1qbdYLrQm3YaNYM\n" +
    "ZpM/BgTmkizEdbbWrwJq9db9c0QlLrQtnLBbZSFupWkNPwxaHG/oKK5O2Dy4+cBH\n" +
    "2LXncqxtEoEK6p63ee6+ZbHJ+RzBAIaGRuwJf907R8Pds4qbw3FwP4qzTdYvHcGJ\n" +
    "65Pjshg/qq/gcMZCgZChV3hyGdLricdMepRtrwIDAQABAoIBAERopb6VrmLRQrZO\n" +
    "0bUCZxj7DXa35RrzVlpI07NdqEjxtixs6laiP+Jd+FMwj7DlEVKfe+lvO6rak/Bx\n" +
    "w56sYLrRFGxuohMiYLYqHpnF63CKUFIxMvgXxjm6VH4X22v/lyP1HT+kyodT0bxR\n" +
    "WDQQB9RD7zJWjX1GYX4JUyMBfx5RsgwziL64PDeFTdKAvR1O+UrbNc46NlDcAf3/\n" +
    "0SydZj8xzJAdrFs/dvvjoYf/TVRCigJo1hPqGlhS52P/kQvNqgaSPMXMftElKqH2\n" +
    "ftSHokYiMyg40+LewEHCykRtUTNI20RCnGJJ1h7Amt59jwPF3rwhaIWxKlIl1/AM\n" +
    "l4YWWQECgYEA6ACTKZL6Z/tfZkoLD2HsN/BWWj7w4KpEMJxBl23RKiSJu8sOb9Jq\n" +
    "aBF2L+idnPHLLRis0J00y00l8jIre3bCELc1gowoFw10Fjtk7tX1PMu3lWKXTmgz\n" +
    "bp8SuTcitJQSAL2ptR8LMQmunxlONdLoadVod57dvbyDgO4AsyMQQ/ECgYEAytB7\n" +
    "wqU9X+byWqs4zQbnA5BcoV2lqnsPCeCY4clK+DGlmM38807JN1w5I1j+QFiiGDYv\n" +
    "AApie2r9n/+/NyxXAbsfS+LYJ6cFJ0t1YJUVdVKeyqUnOh45rEFODFitn9einJBP\n" +
    "PUe5jzhAuIGtFypeHSoZKz3rDlZBdPU7T4Lc658CgYEAybI2Pp6ZNG1FsxgMJYNs\n" +
    "afV4HV067RcZ0WkHXS8L+Sdq1ujh1DWKbI9BwMTqwdc0XDBnjbYef+DCbJ1RUDUe\n" +
    "4olk6+oNsHzxv6JDTaCVZBV3tVfRU0kj7bg9/ugANB3GyP4a3GvwvuE7/vVxGToS\n" +
    "9G+kMtrazGlnql9AHH0PVwECgYBQ9ZJBq9ZpHvaljO3aoiO7f3gKjihgekkRh09f\n" +
    "6gt8Mc1JxwhvU4btC2pfmtm7c+YYxiBS4tJXM+lUYjHBY3jD3x9qGn5wrbJX8j5D\n" +
    "tJ9hOv7aI70Z7RDWmyb9tLRyNxDZcJ3A942yByGGxXUD50y0VabAZTIcggAVIQNx\n" +
    "BOsNPwKBgQCkWrEnWMKrSCsoSabPBTpq2oM5YaxipzuAIjVqhLqJOEfTni6wJNRl\n" +
    "/6d0mgUdaqRJRt+DN7UvOa/IpKXAt3UddkfWZ3RhTRno2DfgUb9TpNnPl9neshzy\n" +
    "C7wqjVT/BACZjOPgSahhvwZSha3E1BCoCkMTPEd2ZfxpNuaGAmqHEQ==\n" +
    "-----END RSA PRIVATE KEY-----\n"

  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile
    }
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
