/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Bot type for shared use
 */
export interface Bot {
  id: string;
  name: string;
  status: "online" | "offline" | "restarting";
  lastUpdate: string;
  uptime: number;
}

/**
 * Response for GET /api/bots
 */
export interface GetBotsResponse {
  bots: Bot[];
}

/**
 * Request body for PUT /api/bots/:id
 */
export interface UpdateBotRequest {
  status: "online" | "offline" | "restarting";
}

/**
 * Visitor tracking type
 */
export interface Visitor {
  ip: string;
  timestamp: string;
  userAgent: string;
}

/**
 * Response for GET /api/visitors
 */
export interface GetVisitorsResponse {
  visitors: Visitor[];
}
