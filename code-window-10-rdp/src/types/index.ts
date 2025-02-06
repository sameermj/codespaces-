export interface RDPConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    domain?: string;
}

export interface ConnectionStatus {
    isConnected: boolean;
    error?: string;
}

export interface Session {
    id: string;
    config: RDPConfig;
    status: ConnectionStatus;
}