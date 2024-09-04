import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BaseResponseApi } from '../config/api.config';
import { IDummy } from '../config';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

/**
 * Class name: AppHttpClientService
 * purpose: create a base class that communicates the api with the backend
 */
export class AppHttpClientService {
    static prefix = environment.apiUrl;

  constructor(
    protected httpClient: HttpClient,
  ) { }
/**
 * 
 * @param uri 
 * @param params 
 * @param configs 
 * @returns observable
 * @base request get http
 */
  get<T>(
    uri: string,
    params = {},
    /**
     * To make a request with progress events enabled, with the reportProgress option set true 
     */
    configs: any = {}
  ): Observable<T> {
    return this.httpClient.get<T>(this.prefixUri(uri), {
      reportProgress: configs.reportProgress,
      params: this.generateHttpParams(params),
      headers: this.generateHttpHeaders(configs.headers)
    }).pipe(
      catchError((err) => {
        console.log('line 37:', err.message);
        return this.handleError(err.message);
      })
    )
  }

  /**
 * 
 * @param uri 
 * @param params 
 * @param configs 
 * @returns observable
 * @base request post http
 */

  post<T>(
    uri: string,
    data: null | IDummy = null,
    configs: any = {}
  ): Observable<T> {
    return this.httpClient.post<T>(this.prefixUri(uri), data, {
      reportProgress: configs.reportProgress,
      headers: this.generateHttpHeaders(configs.headers, configs.isMultiPart),
    }).pipe(
      catchError((err) => {
        console.log('line 37:', err.message);
        return this.handleError(err.message);
      })
    );
  }

  /**
 * 
 * @param uri 
 * @param params 
 * @param configs 
 * @returns observable
 * @base request put http
 */
  put<T>(
    uri: string,
    data: null | IDummy = null,
    configs: any = {}
  ): Observable<T> {
    return this.httpClient.put<T>(this.prefixUri(uri),data, {
      reportProgress: configs.reportProgress,
      headers: this.generateHttpHeaders(configs.headers, configs.isMultiPart)
    }).pipe(
      catchError((err) => {
        console.log('line 37:', err.message);
        return this.handleError(err.message);
      })
    );
  }

  /**
 * 
 * @param uri 
 * @param params 
 * @param configs 
 * @returns observable
 * @base request patch http
 */
  patch<T>(
    uri: string,
    data: null | IDummy = null,
    configs: any = {}
  ): Observable<T> {
    return this.httpClient.patch<T>(this.prefixUri(uri), data, {
      headers: this.generateHttpHeaders(configs.headers)
    }).pipe(
      catchError((err) => {
        console.log('line 37:', err.message);
        return this.handleError(err.message);
      })
    );
  }

  /**
 * 
 * @param uri 
 * @param params 
 * @param configs 
 * @returns observable
 * @base request delete http
 */
  delete<T>(
    uri: string,
  ): Observable<T> {
    return this.httpClient.delete<T>(this.prefixUri(uri),{
      headers: this.generateHttpHeaders()
    }).pipe(
      catchError((err) => {
        console.log('line 37:', err.message);
        return this.handleError(err.message);
      })
    );
  }

  /**
 * Prefix specified uri with backend API prefix.
 */
  private prefixUri(uri: string) {
    if (uri.includes('http')) {
      return uri;
    }

    return AppHttpClientService.prefix + uri;
  }


  private generateHttpParams(params: IDummy) {
    let httpParams = new HttpParams();

    for (const key in params) {
      /**
       * determines whether a property is a direct property of an object
       */
      if (params.hasOwnProperty(key)) {
        /**
         * concatenate param string for object
         */
        httpParams.append(key, params[key]);
      }
    }
    return httpParams;
  }

  /**
   *  Create and configure the HttpHeaders object
   */
  private generateHttpHeaders(
    headerInfo?: IDummy,
    isMultiPart = false
  ) {
    let httpHeaders = new HttpHeaders();

    !isMultiPart && httpHeaders.append('Content-Type', 'application-json');

    if (headerInfo) {
      for (const header of Object.keys(headerInfo)) {
        if (headerInfo[header]) {
          httpHeaders.set(header, headerInfo[header]);
        } else {
          httpHeaders.delete(header);
        }
      }
    }
    return httpHeaders;
  }

  private handleError(errorSet: string) {
    return throwError(() => new Error(errorSet));
  }
}
