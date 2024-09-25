package com.masidao.travel.global.config;

import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.SSLContexts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.elc.ElasticsearchConfiguration;

import javax.net.ssl.SSLContext;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

@Configuration
public class ElasticSearchConfig extends ElasticsearchConfiguration {
    @Value("${spring.elasticsearch.username}")
    private String username;

    @Value("${spring.elasticsearch.password}")
    private String password;

    @Value("${spring.elasticsearch.uris}")
    private String[] esHost;

    @Override
    public ClientConfiguration clientConfiguration() {
        return ClientConfiguration.builder()
                .connectedTo(esHost)
                // TODO : 지금 모든 인증서를 통과하게끔 되어있는데, 검색기능 완료한 뒤에 무조건 이거 인증서를 사용하도록 바꿔야한다.
                .usingSsl(createSslContext())
                // ES 8 버전부터 보안을 위한 기본 인증과정이 필요해서 withBasicAuth를 사용
                .withBasicAuth(username, password)
                .build();
    }

    private SSLContext createSslContext() {
        try {
            // 모든 인증서를 신뢰하도록 TrustStrategy 설정
            TrustStrategy acceptingTrustStrategy = new TrustStrategy() {
                @Override
                public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
                    return true;
                }
            };

            SSLContextBuilder sslContextBuilder = SSLContexts.custom()
                    .loadTrustMaterial(null, acceptingTrustStrategy);

            return sslContextBuilder.build();
        } catch (Exception e) {
            throw new RuntimeException("Failed to create SSL context", e);
        }
    }
}
