CREATE TABLE IF NOT EXISTS t_p95327751_vospitatel_site_proj.contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_contact_messages_created_at ON t_p95327751_vospitatel_site_proj.contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_email ON t_p95327751_vospitatel_site_proj.contact_messages(email);
